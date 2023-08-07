package com.GaYaHole.Pro.controller;


import com.GaYaHole.Pro.entity.Accounting;
import com.GaYaHole.Pro.entity.Reservation;
import com.GaYaHole.Pro.entity.Room;
import com.GaYaHole.Pro.entity.User;
import com.GaYaHole.Pro.repository.AccountRepository;
import com.GaYaHole.Pro.repository.ReservationRepository;
import com.GaYaHole.Pro.repository.RoomRepository;
import com.GaYaHole.Pro.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@RestController
public class ReservationController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    private ReservationRepository reservationRepository;

    @Autowired
    private AccountRepository accountRepository;


    //http://localhost:8095/dummy/datecheck
    @PostMapping("/reser/datecheck") //체크인, 체크아웃 날짜에 따른 방 정보 출력
    public List<Room> datecheck(@RequestBody Reservation reservation) throws ParseException {
        List<Room> ableRoomList = roomRepository.dateCal(reservation.getCheck_in(), reservation.getCheck_out());

        //확인용으로 출력
        if (ableRoomList.size() != 0) {
            System.out.println("===========예약 가능한 방 목록============");

            for (int i = 0; i < ableRoomList.size() - 1; i++) {
                System.out.println("============== " + (i + 1) + "번째 방 ==============");

                int roomnum = ableRoomList.get(i).getR_num();
                int roomprice = ableRoomList.get(i).getR_price();
                int roomsize = ableRoomList.get(i).getR_size();
                String roomtype = ableRoomList.get(i).getR_type();

                System.out.println("방 번호 : " + roomnum);
                System.out.println("방 가격 : " + roomprice);
                System.out.println("방 인원 : " + roomsize);
                System.out.println("방 종류 : " + roomtype);

                System.out.println("========================================");

            }
        }

        return ableRoomList; //방 리스트 반환
    }

    @PostMapping("/reser/reservation") //예약하기
    public String reserv (@RequestParam String id, @RequestParam int rnum, @RequestParam String optioncode,
                          @RequestParam String checkin, @RequestParam String checkout, @RequestParam int totalprice )
            throws ParseException{

        User user; Room room;
        user = userRepository.userinfo(id);
        room = roomRepository.roominfo(rnum);

        int renum = reservationRepository.numCount()+1;

        SimpleDateFormat sidf = new SimpleDateFormat("yyyy-MM-dd");
        Date check_in = sidf.parse(checkin);
        Date check_out = sidf.parse(checkout);


        Reservation reservation = Reservation.builder()
                .reservation_num(renum)
                .option_code(optioncode)
                .check_in(check_in)
                .check_out(check_out)
                .total_price(totalprice)
                .r_num(room)
                .id(user)
                .build();

        reservationRepository.save(reservation);

        Accounting accounting = Accounting.builder()
                .pay_number(renum)
                .price(totalprice)
                .id(user)
                .reservation_num(reservation)
                .build();

        accountRepository.save(accounting);

        return "예약 성공";
    }


}
