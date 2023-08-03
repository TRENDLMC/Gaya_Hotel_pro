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


    @Query(value="select * from room where r_num not in ((select r_num from reservation where date( :testDate) between check_in and check_out))", nativeQuery = true)
    List<Room> test2( @Param("testDate") Date testdate);


}
