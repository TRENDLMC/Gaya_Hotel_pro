package com.GaYaHole.Pro.entity;


import lombok.*;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Data
public class User extends BaseEntity{ //사용자 테이블

    public User(String id, String pwd){
        this.getId();
        this.getPwd();
    }

    @Id
    private String id; //아이디

    public String getId(){
        return id;
    }

    @Column(length=60, nullable=false)
    private String pwd; //비밀번호

    public String getPwd(){
        return pwd;
    }

    // private Date regdate; 가입일, BaseEntity에서 받음

    @Column(length=100, nullable=false)
    private String add1; //주소
    @Column(length=100, nullable=false)
    private String add2; //상세 주소

    @Column(length=50, nullable=false)
    private String name; //이름

    @ColumnDefault("'010'")
    @Column(length=10, nullable=false)
    private String p_num1; //휴대폰 번호 앞자리
    @Column(length=10, nullable=false)
    private String p_num2; //휴대폰 번호 두번째 자리
    @Column(length=10, nullable=false)
    private String p_num3; //휴대폰 번호 세번째 자리

    @Column(length=50)
    private String email; //이메일

    private int grade; //등급 (블랙리스트 여부) -임시-



}
