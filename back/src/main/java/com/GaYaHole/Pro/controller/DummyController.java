package com.GaYaHole.Pro.controller;

import com.GaYaHole.Pro.entity.Reservation;
import com.GaYaHole.Pro.entity.Room;
import com.GaYaHole.Pro.entity.User;
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
public class DummyController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    private ReservationRepository reservationRepository;

    //http://localhost:8095/dummy/join
    @PostMapping("/dummy/join")
    public String join (@RequestBody User user){

        System.out.println("Id : "+user.getId());
        System.out.println("pwd : "+user.getPwd());
        System.out.println("Name : "+user.getName());
        System.out.println("Add1 : "+user.getAdd1());
        System.out.println("Add2 : "+user.getAdd2());
        System.out.println("Email : " +user.getEmail());
        System.out.println("pnum1 : "+user.getP_num1());
        System.out.println("pnum2 : "+user.getP_num2());
        System.out.println("pnum3 : "+user.getP_num3());
        System.out.println("grade : "+user.getGrade());

        userRepository.save(user);

        return "회원가입 완료";
    }

    //http://localhost:8095/dummy/login
    @PostMapping("/dummy/login")
    public int login(@RequestBody User user){

        System.out.println(user.getId());
        int result; //받아올 값 보기 편하게
        result = userRepository.logintest(user.getId(),user.getPwd());
        if(result==1){
            System.out.println( "로그인 성공");
        }
        else{
            System.out.println( "로그인 실패");
        }

        // 반환 값 1 : 로그인 성공
        // 반환 값 0 : 로그인 실패
        return result;

    }

    //http://localhost:8095/dummy/idcheck
    @PostMapping("/dummy/idcheck")
    public int idcheck(@RequestBody User user){
        int result;
        result = userRepository.idtest(user.getId());
        return result;

    }

    //http://localhost:8095/dummy/datecheck
    @PostMapping("/dummy/datecheck") //체크인, 체크아웃 날짜에 따른 방 정보 출력
    public List<Room> datecheck(@RequestParam String checkin, @RequestParam String checkout) throws ParseException {

        SimpleDateFormat sidf = new SimpleDateFormat("yyyy-MM-dd");

        Date testdate1 = sidf.parse(checkin);
        Date testdate2 = sidf.parse(checkout);
        List<Room> ableRoomList = roomRepository.dateCal(testdate1, testdate2);

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

    @PostMapping("/dummy/reservation")
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

        return "예약 성공";
    }
}
