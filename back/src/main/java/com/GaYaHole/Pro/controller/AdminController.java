package com.GaYaHole.Pro.controller;


import com.GaYaHole.Pro.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AdminController {



    @Autowired
    RoomRepository roomRepository;

    @Transactional
    @PutMapping("/admin/modroom")
    public int modRoom(@RequestParam int roomnum, @RequestParam String roomprice){

        roomRepository.roomUpdate(roomnum, roomprice);

        System.out.println("확인");


        return 1;
    }
}
