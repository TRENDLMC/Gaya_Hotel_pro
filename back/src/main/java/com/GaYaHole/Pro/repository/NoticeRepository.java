package com.GaYaHole.Pro.repository;

import com.GaYaHole.Pro.entity.Notice;
import com.GaYaHole.Pro.entity.Option;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface NoticeRepository extends JpaRepository<Notice, Integer> {


}
