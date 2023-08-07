package com.GaYaHole.Pro.repository;

import com.GaYaHole.Pro.entity.Review;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

@JsonIgnoreProperties()
public interface ReviewRepository extends JpaRepository<Review, Integer >{

    @Query(value = "select * from review where r_num=:rno ",nativeQuery = true)
    List<Review> test111(int rno);

    @Query(value = "INSERT INTO review(review_num, content, starpoint) VALUES (:num, :content, :star)", nativeQuery = true)
    void rinsert (@Param("num") int review_num, @Param("content") String content, @Param("star")int starpoint);

    @Query(value = "UPDATE review SET content=:content1, startpoint=:star1 where review_num=:review_num", nativeQuery = true)
    void rupdate (int review_num, String content1, int star1);
}
