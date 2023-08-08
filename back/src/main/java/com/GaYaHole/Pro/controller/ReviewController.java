package com.GaYaHole.Pro.controller;

import com.GaYaHole.Pro.entity.Reservation;
import com.GaYaHole.Pro.entity.Review;
import com.GaYaHole.Pro.entity.Room;
import com.GaYaHole.Pro.entity.User;
import com.GaYaHole.Pro.repository.ReviewRepository;
import com.GaYaHole.Pro.service.ReviewService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/review")
@Log4j2
public class ReviewController {

    @Autowired
    private ReviewService reviewService;



    @PostMapping("/write")
    public String regreview (@RequestBody Review review) {
        reviewService.regreview(review);
        return "작성되었습니다";
    }

    @PutMapping("/update")
    public String ureview (@RequestBody Review review) {
        reviewService.ureview(review);
        return "수정 완료";
    }

    @DeleteMapping("/remove/{reviewnum}")
    public String rdel(@RequestBody Review review) {
        reviewService.rdel(review.getReview_num());
        return "삭제 완료";
    }

    @GetMapping("/read")
    public Optional<Review> rdet(@RequestBody Review review) {
        Optional<Review> reviewdetail = reviewService.rdet(review.getReview_num());
        return reviewdetail;
    }

}
