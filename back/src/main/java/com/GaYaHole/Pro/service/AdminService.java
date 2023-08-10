package com.GaYaHole.Pro.service;

import com.GaYaHole.Pro.entity.Notice;
import com.GaYaHole.Pro.entity.Review;
import com.GaYaHole.Pro.entity.Room;
import com.GaYaHole.Pro.entity.User;
import com.GaYaHole.Pro.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;


public interface AdminService {
    

    public String totalProfit() throws Exception;
    public void addNotice(Notice notice) throws Exception;
    public List userinfo() throws Exception;
    public List allreservation() throws Exception;
    public void modUsergrade(User user) throws Exception;
    public List allrooms() throws Exception;

    public List allNotice() throws Exception; // 공지 조회 (전체)
    public void modNotice(Notice notice) throws Exception; // 공지 수정
    public void delNotice(int n_num) throws Exception; // 공지 삭제


}
