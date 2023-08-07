package com.GaYaHole.Pro.repository;

import com.GaYaHole.Pro.entity.Option;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Map;

public interface OptionRepository extends JpaRepository<Option, String> {

    @Query(value = "select * from option where option_code= :optioncode ", nativeQuery = true)
    Option optionselect  (@Param("optioncode") String optioncode);

}
