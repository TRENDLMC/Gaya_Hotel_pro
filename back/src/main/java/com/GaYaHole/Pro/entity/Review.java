package com.GaYaHole.Pro.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.naming.spi.ResolveResult;
import javax.persistence.*;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Review extends BaseEntity{

    @Id
    private int review_num; // 리뷰 번호

    @Column(nullable = false, length=500)
    private String content; // 리뷰 내용

    @Column(nullable = false)
    private float starpoint;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="id")
    @JsonIgnore
    private User id; // 관계 설정 이렇게 하는거 맞는지 테스트

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="r_num")
    @JsonIgnore
    private Room r_num;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="reservation_num")
    @JsonIgnore
    private Reservation reservation_num;

}
