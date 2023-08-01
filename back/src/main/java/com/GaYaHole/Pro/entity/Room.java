package com.GaYaHole.Pro.entity;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Room extends BaseEntity{
    
    @Id
    private int room_number; //방 번호
    
    private int room_size; //인원 수
    
    @Column(nullable = false, length = 20)
    private String room_type; //방 종류
    
    private int room_price; //방 가격
}
