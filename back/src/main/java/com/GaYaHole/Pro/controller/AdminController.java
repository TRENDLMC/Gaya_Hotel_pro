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


    @GetMapping("/admin/gProfit") //총 매출 확인
    public int profit() throws Exception {
        String result =adminService.totalProfit();
        return result==null ? 0 :Integer.parseInt(result);
    }

    @PostMapping("/admin/addnotice") //공지 추가
    public String addnotice(@RequestBody Notice notice) throws Exception {
        adminService.addNotice(notice);
        return "공지 업로드";
    }

    @GetMapping("/admin/notice")    // 공지 조회
    public List<Notice> allnotice(Notice notice) throws Exception {
        List<Notice> allnotice = adminService.allNotice();
        return allnotice;
    }

    @GetMapping("/admin/ndetail")    // 공지 상세
    public Notice ndetail(@Param("n_num") int n_num) throws Exception{
        Optional<Notice> ndet = noticeRepository.findById(n_num);
        if(ndet.isPresent()){
            Notice notice=ndet.get();
            return notice;
        }
        return null;
    }

    @PutMapping("/admin/modnotice")    // 공지 수정
    public String modnotice(@RequestBody Notice notice) throws Exception {
       adminService.modNotice(notice);
        return "공지 수정";
    }

    @DeleteMapping("/admin/{n_num}")  // 공지 삭제
    public String delnotice(@PathVariable("n_num") int n_num) throws Exception {
        adminService.delNotice(n_num);
        return "공지 삭제";
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

    @PutMapping("/admin/moduser") //사용자 정보 수정 (-1, 0)
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
