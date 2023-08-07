package com.GaYaHole.Pro.controller;


import com.GaYaHole.Pro.entity.Notice;
import com.GaYaHole.Pro.entity.Reservation;
import com.GaYaHole.Pro.entity.User;
import com.GaYaHole.Pro.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AdminController {



    @Autowired
    RoomRepository roomRepository;

    @Autowired
    AccountRepository accountRepository;

    @Autowired
    NoticeRepository noticeRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    ReservationRepository reservationRepository;

    @Transactional
    @PutMapping("/admin/modroom") //방 가격 수정
    public int modRoom(@RequestParam int roomnum, @RequestParam String roomprice){

        roomRepository.roomUpdate(roomnum, roomprice);

        System.out.println("확인");

        return 1;
    }

    @PostMapping("/admin/gProfit") //총 매출 확인
    public int profit(){
        int result=0;
        result = accountRepository.totalAccounting();

        System.out.println("============== 총 매출 확인용 : "+result+" ==============");

        return result;
    }

    @PostMapping("/admin/addnotice") //공지 추가
    public String addnotice(@RequestBody Notice notice){

        noticeRepository.save(notice);

        return "공지 업로드";

    }

    @PostMapping("/admin/userinfo") //유저들 정보 조회
    public List userinfo(){

        List<User> users = userRepository.findAll();
        System.out.println(users);

        return users;
    }

    @PostMapping("/admin/reservation") //전체 예약 조회
    public List<Reservation> allreservation(){

        List<Reservation> reservations = reservationRepository.findAll();

        return reservations;

    }

//    @PostMapping("/admin/moduser1") //사용자 정보 수정 (-1, 0)
//    public String moduser1(@RequestBody User user){
//
//        userRepository.save(user);
//
//        return "사용자 정보 수정";
//
//    }

    @PostMapping("/admin/moduser") //사용자 정보 수정 (-1, 0)
    public String moduser(@RequestBody User user){

        userRepository.moduser(user.getId(), user.getGrade());

        return "사용자 정보 수정";

    }
}
