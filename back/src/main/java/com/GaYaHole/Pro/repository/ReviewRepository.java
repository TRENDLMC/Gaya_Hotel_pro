package com.GaYaHole.Pro.repository;

import com.GaYaHole.Pro.entity.Review;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

@JsonIgnoreProperties()
public interface ReviewRepository extends JpaRepository<Review, Integer >{

    @Query(value = "select * from review where r_num=:rno ",nativeQuery = true)
    List<Review> test111(int rno);
}
