package com.GaYaHole.Pro.repository;

import com.GaYaHole.Pro.entity.Room;
import com.GaYaHole.Pro.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.repository.query.Param;

import java.util.Date;
import java.util.List;

public interface RoomRepository extends JpaRepository<Room, Integer> {


    @Query(value= "select * from room ",nativeQuery = true )
    List<Room> test();

    @Query(value="select * from room where r_num not in ((select r_num from reservation where date( :testDate) between check_in and check_out))", nativeQuery = true)
    List<Room> test2( @Param("testDate") Date testdate);




    //날짜 계산 메소드 (체크인 체크아웃 둘다)
    @Query(value="select * from room where r_num not in (" +
            "(select r_num from reservation r2 where r2.check_in "+
            " between date( :cidate) and date ( :codate) "+
            " union "+
            "(select r_num from reservation r2 where r2.check_out "+
            "between date( :cidate) and date ( :codate) )) )", nativeQuery = true)
    List<Room> dateCal (@Param("cidate") Date checkin, @Param("codate") Date checkout);

    @Query(value="select* from room where r_num = :rnum", nativeQuery = true)
    Room roominfo (@Param("rnum") int r_num);

}
