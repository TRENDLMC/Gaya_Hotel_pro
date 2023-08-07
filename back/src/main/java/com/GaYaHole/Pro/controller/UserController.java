package com.GaYaHole.Pro.controller;

import com.GaYaHole.Pro.entity.Accounting;
import com.GaYaHole.Pro.entity.Reservation;
import com.GaYaHole.Pro.entity.Room;
import com.GaYaHole.Pro.entity.User;
import com.GaYaHole.Pro.repository.AccountRepository;
import com.GaYaHole.Pro.repository.ReservationRepository;
import com.GaYaHole.Pro.repository.RoomRepository;
import com.GaYaHole.Pro.repository.UserRepository;
import com.GaYaHole.Pro.service.UserServiceImpl;
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
    UserServiceImpl userService;


    @PostMapping("/user/join")
    public String join (@RequestBody User user){

        userService.join(user);

        return "회원가입 완료";
    }

    @PostMapping("/user/login")
    public int login(@RequestBody User user){

        int result = userService.login(user);

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
        result = userService.idCheck(user);
        return result;

    }

    @PostMapping ("/user/mypage")
    public List<Reservation> mypage(@RequestBody User user){ //id 받아오면 된다...

        List<Reservation> info = userService.mypage(user);
        System.out.println("체크용 : " + info.get(0));

        return info;
    }

    @PostMapping("/user/gradecheck")
    public int gradecheck(@RequestBody User user){
        Optional<User> user1=userService.gradeCheck(user);

        return user1.get().getGrade();
    }


}
