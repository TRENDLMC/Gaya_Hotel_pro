package com.GaYaHole.Pro.entity;


import lombok.*;

import javax.persistence.*;

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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="id")
    private User id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="r_num")
    private Room r_num;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="option_code")
    private Option option_code;

}
