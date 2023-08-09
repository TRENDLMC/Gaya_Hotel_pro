package com.GaYaHole.Pro.controller;


import com.GaYaHole.Pro.entity.Notice;
import com.GaYaHole.Pro.entity.Reservation;
import com.GaYaHole.Pro.entity.Room;
import com.GaYaHole.Pro.entity.User;
import com.GaYaHole.Pro.repository.*;
import com.GaYaHole.Pro.service.AdminService;
import com.GaYaHole.Pro.service.AdminServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
public class AdminController {

    @Autowired
    AdminServiceImpl adminService;

    @Autowired
    NoticeRepository noticeRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    ReservationRepository reservationRepository;

    @PutMapping("/admin/modroom") //방 가격 수정
    public int modRoom(@RequestBody Room room) throws Exception {
        adminService.modRoomPrice(room);
        return 1;
    }
    @GetMapping("/admin/gProfit") //총 매출 확인
    public int profit() throws Exception {

        String result =adminService.totalProfit();
        System.out.println("============== 총 매출 확인용 : "+result+" ==============");
        return result==null ? 0 :Integer.parseInt(result);
    }


    @PostMapping("/admin/addnotice") //공지 추가
    public String addnotice(@RequestBody Notice notice) throws Exception {
        adminService.addNotice(notice);
        return "공지 업로드";

    }

    @GetMapping("/admin/userinfo") //유저들 정보 조회
    public List userinfo() throws Exception {
        List<User> users = adminService.userinfo();
        return users;
    }

    @GetMapping("/admin/reservation") //전체 예약 조회
    public List<Map<String, Object>> allreservation() throws Exception {
        List<Map<String, Object>> allresvlist = adminService.allreservation();
        return allresvlist;
    }

    @PostMapping("/admin/moduser") //사용자 정보 수정 (-1, 0)
    public String moduser(@RequestBody User user) throws Exception {
        adminService.modUsergrade(user);
        return "사용자 정보 수정";

    }

    @GetMapping("/admin/rooms")     // 전체 방 정보 조회
    public List<Room> allrooms() throws Exception {
        List<Room> rooms = adminService.allrooms();
        return rooms;
    }
}
