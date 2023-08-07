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
import java.util.*;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    private ReservationRepository reservationRepository;

    @Autowired
    private AccountRepository accountRepository;


    @PostMapping("/user/join")
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

    @PostMapping("/user/login")
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

    @PostMapping("/user/idcheck")
    public int idcheck(@RequestBody User user){
        int result;
        result = userRepository.idtest(user.getId());
        return result;

    }

    @PostMapping ("/user/mypage")
    public List<Reservation> mypage(@RequestBody User user){ //id 받아오면 된다...


        List<Reservation> info = reservationRepository.userinfo(user.getId());


        System.out.println("체크용 : " + info.get(0));
        System.out.println("체크용 2 : " + info.get(1)); //test2를 넣으면 오류 (예약정보가 1개밖에 없어서)


        return info;
    }


}
