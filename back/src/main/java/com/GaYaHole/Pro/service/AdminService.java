package com.GaYaHole.Pro.service;

import com.GaYaHole.Pro.entity.Notice;
import com.GaYaHole.Pro.entity.Room;
import com.GaYaHole.Pro.entity.User;
import com.GaYaHole.Pro.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;


public interface AdminService {
    
    public void modRoomPrice(Room room) throws Exception;
    public int totalProfit() throws Exception;
    public void addNotice(Notice notice) throws Exception;
    public List userinfo() throws Exception;
    public List allreservation() throws Exception;
    public void modUsergrade(User user) throws Exception;

}
