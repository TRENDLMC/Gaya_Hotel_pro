package com.GaYaHole.Pro.controller;

import com.GaYaHole.Pro.entity.Review;
import com.GaYaHole.Pro.entity.Room;
import com.GaYaHole.Pro.repository.ReviewRepository;
import com.GaYaHole.Pro.repository.RoomRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/reserv")
@Log4j2
public class ReservController {

    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    private ReviewRepository reviewRepository;

    @GetMapping("/detail") // 방 정보 출력 - r_num
    public Optional<Room> detail(@RequestBody Room room) {
        log.info("r_num: " + room);
        Optional<Room> rom = roomRepository.findById(room.getR_num());

        return rom;
    }

    @GetMapping("/review") // 리뷰 출력 - r_num
    public List<Review> rreview(@RequestBody Room room) {
        log.info("review: " + room.getR_num());
        List<Review> rev = reviewRepository.test111(room.getR_num());
        return rev;
    }

}
