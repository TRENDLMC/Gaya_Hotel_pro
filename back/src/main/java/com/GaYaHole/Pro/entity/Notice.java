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
public class Notice{
    
    @Id
    private int n_num;

    @Column(nullable = false, length=500)
    private String n_content;

    @Column(nullable = false, length=50)
    private String n_title;
}
