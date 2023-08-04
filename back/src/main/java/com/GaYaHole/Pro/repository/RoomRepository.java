package com.GaYaHole.Pro.repository;

import com.GaYaHole.Pro.entity.Room;
import com.GaYaHole.Pro.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.repository.query.Param;

<<<<<<< Updated upstream
import java.util.Date;
import java.util.List;
=======
<<<<<<< HEAD
public interface RoomRepository extends JpaRepository<Room, Integer>{
=======
import java.util.Date;
import java.util.List;
>>>>>>> master
>>>>>>> Stashed changes

public interface RoomRepository extends JpaRepository<Room, Integer> {


    @Query(value= "select * from room ",nativeQuery = true )
    List<Room> test();

    @Query(value="select * from room where r_num not in ((select r_num from reservation where date( :testDate) between check_in and check_out))", nativeQuery = true)
    List<Room> test2( @Param("testDate") Date testdate);
}
