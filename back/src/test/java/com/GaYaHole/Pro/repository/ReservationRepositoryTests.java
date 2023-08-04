package com.GaYaHole.Pro.repository;

import com.GaYaHole.Pro.entity.Option;
import com.GaYaHole.Pro.entity.Reservation;
import com.GaYaHole.Pro.entity.Room;
import com.GaYaHole.Pro.entity.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@SpringBootTest
public class ReservationRepositoryTests {

    @Autowired
    private ReservationRepository reservationRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private   RoomRepository roomRepository;

//    @Test
//    public void test1(){
//
//        String testdate = "20230819";
//        List<Room> ableRoom = reservationRepository.test(testdate);
//
//        System.out.println("========테스트 결과 출력 : "+ableRoom.get(0).getR_num()+"=========");
//
//    }

    @Test
    public void reservation() throws ParseException {

        User user;
        Room room;

        // ======== 예약 정보 (임시, 들어올 모습) ========

        String id = "test2"; //참조
        user =userRepository.userinfo(id);

        String option_code = "ABC";
        String check_in ="2023-08-16";
        String check_out ="2023-08-20";
        int totalprice = 300000;

        int rnum = 101;
        room =roomRepository.roominfo(rnum);

        int renum = reservationRepository.numCount()+1;
        System.out.println("reservation number : =================== : " + renum);


        SimpleDateFormat sidf = new SimpleDateFormat("yyyy-MM-dd");

        Date checkin = sidf.parse(check_in);
        Date checkout = sidf.parse(check_out);

        Reservation reservation = Reservation.builder()
                .reservation_num(renum)
                .option_code(option_code)
                .check_in(checkin)
                .check_out(checkout)
                .total_price(totalprice)
                .r_num(room)
                .id(user)
                .build();

        reservationRepository.save(reservation);


    }

}
