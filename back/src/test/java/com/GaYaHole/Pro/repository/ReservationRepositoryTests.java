package com.GaYaHole.Pro.repository;

import com.GaYaHole.Pro.entity.Option;
import com.GaYaHole.Pro.entity.Reservation;
import com.GaYaHole.Pro.entity.Room;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
public class ReservationRepositoryTests {

    @Autowired
    private ReservationRepository reservationRepository;

//    @Test
//    public void test1(){
//
//        String testdate = "20230819";
//        List<Room> ableRoom = reservationRepository.test(testdate);
//
//        System.out.println("========테스트 결과 출력 : "+ableRoom.get(0).getR_num()+"=========");
//
//    }


}
