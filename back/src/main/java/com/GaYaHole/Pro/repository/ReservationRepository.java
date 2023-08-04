package com.GaYaHole.Pro.repository;

import com.GaYaHole.Pro.entity.Reservation;
import com.GaYaHole.Pro.entity.Room;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

public interface ReservationRepository extends JpaRepository<Reservation, Integer> {


//    //예약 정보 Insert하는 쿼리
//    @Query(value="", nativeQuery = true)
//    public void reservation();

    @Query (value = "select count(reservation_num) from reservation", nativeQuery = true)
    int numCount();

}
