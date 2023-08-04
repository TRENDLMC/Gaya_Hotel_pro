package com.GaYaHole.Pro.repository;

import com.GaYaHole.Pro.entity.Accounting;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface AccountRepository extends JpaRepository<Accounting, Integer> {

    @Query(value = "select sum(price) from accounting", nativeQuery = true)
    int totalAccounting ();

    @Query(value="select sum(price) from accounting where id =  :userid", nativeQuery = true)
    int userinfo(@Param("userid") String id);
}
