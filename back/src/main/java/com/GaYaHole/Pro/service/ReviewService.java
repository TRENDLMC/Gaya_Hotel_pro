package com.GaYaHole.Pro.service;

import com.GaYaHole.Pro.entity.Review;
import org.hibernate.mapping.List;

import java.util.Optional;

public interface ReviewService {

    public void regreview(Review review);
    public void ureview(Review review);
    public void rdel(int review_num);

    public Optional rdet(int review_num);

}
