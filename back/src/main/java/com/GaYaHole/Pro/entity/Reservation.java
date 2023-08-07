package com.GaYaHole.Pro.entity;


import lombok.*;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Reservation extends BaseEntity{

    @Id @ColumnDefault("1")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int reservation_num;

    private int total_price;


    private Date check_in;

    private Date check_out;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="id")
    private User id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="r_num")
    private Room r_num;

    private String option_code;

}
