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
public class Option extends BaseEntity{

    @Id
    private String option_code;

    @Column(nullable = false, length = 100)
    private String option_content;

    private int option_price;

    private int option_type;

}
