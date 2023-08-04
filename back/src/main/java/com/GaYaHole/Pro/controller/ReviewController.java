package com.GaYaHole.Pro.controller;

import com.GaYaHole.Pro.entity.Review;
import com.GaYaHole.Pro.repository.ReviewRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/review")
@Log4j2
public class ReviewController {

    @Autowired
    private ReviewRepository reviewRepository;

    @PostMapping("/write")
    public String nreview (@Param("num")int review_num,
                           @Param("content")String content,
                           @Param("star")int starpoint) {
        reviewRepository.rinsert(review_num, content, starpoint);
        return "";
    }

    @GetMapping("/read")
    public Optional<Review> rdet(@RequestBody Review review) {
        Optional<Review> reviewdetail = reviewRepository.findById(review.getReview_num());

        return reviewdetail;
    }

    @PutMapping("/update")
    public String ureview (@RequestBody Review review) {
/*
        Optional<Review> reviewupdate = reviewRepository.findById(review.getReview_num()); // 해당 번호 리뷰 정보 가져오기

        if (reviewupdate.isPresent()) {

            Review upreview = Review.builder()
                    .content(review.getContent())
                    .starpoint(review.getStarpoint())
                    .id(reviewupdate.get().getId())
                    .review_num(reviewupdate.get().getReview_num())
                    .build();
            reviewRepository.save(upreview);

        }*/
        reviewRepository.save(review);
        return "";
    }

    @DeleteMapping("/delete/{reviewnum}")
    public String rdel (@PathVariable("reviewnum") int reviewnum) {
        Optional<Review> review =reviewRepository.findById(reviewnum);
        Review review1 =review.get();
        reviewRepository.delete(review1);
        return "";
    }

}
