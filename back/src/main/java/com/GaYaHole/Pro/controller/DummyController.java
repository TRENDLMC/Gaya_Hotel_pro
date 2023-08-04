package com.GaYaHole.Pro.controller;

import com.GaYaHole.Pro.entity.User;
import com.GaYaHole.Pro.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DummyController {

    @Autowired
    private UserRepository userRepository;

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

    @PostMapping("/dummy/idcheck")
    public void idcheck(@RequestParam String string){
        int num=100;
        int result;

        result = userRepository.idtest(string);

        if(result>0){
            num = 0; //중복
        }else{
            num = 1; //중복아님
        }


        System.out.println("반환될 값 : "+num);

    }
}
