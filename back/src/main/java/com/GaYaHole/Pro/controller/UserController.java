package com.GaYaHole.Pro.controller;

import com.GaYaHole.Pro.entity.*;
import com.GaYaHole.Pro.repository.*;
import com.GaYaHole.Pro.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@RestController
public class UserController {

    @Autowired
    UserServiceImpl userService;

    @Autowired
    OptionRepository optionRepository;

    @Autowired
    ReservationRepository reservationRepository;


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
    public List<Map<String,Object>> mypage(@RequestBody User user){ //id 받아오면 된다...
        List<Reservation> info = userService.mypage(user);
        List<Map<String,Object>> list = new ArrayList<>();
        for (int i=0; i<info.size(); i++) {                             // 옵션 코드 파싱
            String code = info.get(i).getOption_code();
            Map<String,Object>  map = new HashMap<>();
            char[] str2 = code.toCharArray();
            for (int j=0; j<str2.length; j++) {
                Optional<Option> option = optionRepository.findById(String.valueOf(str2[j]));
                if(option.isPresent()) {
                    Option option1 = option.get();
                    map.put("imt" + j, option1);
                }
            }
            map.put("res_num",info.get(i));
            list.add(map);
        }
        return list;
    }

    @PostMapping("/user/gradecheck")
    public int gradecheck(@RequestBody User user){
        Optional<User> user1=userService.gradeCheck(user);
        return user1.get().getGrade();
    }

    @PostMapping("/user/info")
    public User userinfo(@RequestBody User user){
        User user1=userService.userinfo(user);
        return user1;
    }

    @PostMapping("/user/chepwd")
    public int usechepwd(@RequestBody User user){
        return userService.countbyidandpwd(user.getId(), user.getPwd());
    }

    @PutMapping("/user/modify")
    public int usermodify(@RequestBody User user){
        Optional<User> user1=userService.findById(user.getId());
        User user2=new User();
        if(user1.isPresent()){
            user2=user1.get();
        }
        user.setPwd(user2.getPwd());
        userService.join(user);
        return 1;
    }

}
