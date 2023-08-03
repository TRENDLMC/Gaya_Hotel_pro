package com.GaYaHole.Pro.repository;

import com.GaYaHole.Pro.entity.Room;
import com.GaYaHole.Pro.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;

public interface RoomRepository extends JpaRepository<Room, Long>, QuerydslPredicateExecutor<Room> {

}