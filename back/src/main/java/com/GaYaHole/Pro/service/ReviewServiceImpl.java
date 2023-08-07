package com.GaYaHole.Pro.service;

import com.GaYaHole.Pro.entity.Review;
import com.GaYaHole.Pro.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ReviewServiceImpl implements ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;
    @Autowired
    private Review review;

    @Override
    public void regreview(Review review) {
        reviewRepository.save(review);
    }

    @Override
    public void ureview(Review review) {
        reviewRepository.save(review);
    }

    @Override
    public void rdel(int review_num) {
        reviewRepository.deleteById(review_num);
    }

    @Override
    public Optional<Review> rdet(int review_num) {
        Optional<Review> reviewdetail = reviewRepository.findById(review_num);

        return reviewdetail;
    }
}
