package com.GaYaHole.Pro.repository;

import com.GaYaHole.Pro.entity.Accounting;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface AccountRepository extends JpaRepository<Accounting, Integer> {

    @Query(value = "select sum(price) from accounting", nativeQuery = true)
    int totalAccounting ();

}
