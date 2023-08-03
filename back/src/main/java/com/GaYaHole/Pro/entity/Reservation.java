package com.GaYaHole.Pro.entity;


import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Reservation extends BaseEntity{

    @Id
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
    

}
