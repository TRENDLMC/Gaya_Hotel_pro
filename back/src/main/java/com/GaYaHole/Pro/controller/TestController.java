package com.GaYaHole.Pro.controller;


import com.GaYaHole.Pro.entity.User;
import org.springframework.web.bind.annotation.*;

@RestController
public class TestController {

    //http://localhost:8095/http/get
    @GetMapping("http/get")
    public String getTest(User user){
        return "get 요청 : " + user.getId() + user.getPwd() ;
    }

    //http://localhost:8095/http/post
    @PostMapping("http/post")
    public String postTest(@RequestBody User user){
        return "post 요청 : " + user.getId() + user.getPwd() ;
    }

    //http://localhost:8095/http/put
    @PutMapping ("http/put")
    public String putTest(@RequestBody User user){
        return "put 요청 : "  + user.getId() + user.getPwd() ;
    }
    @GetMapping("http/delete")
    public String deleteTest(){
        return "delete 요청";
    }
}
