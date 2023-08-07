package com.GaYaHole.Pro.service;

import com.GaYaHole.Pro.entity.Notice;
import com.GaYaHole.Pro.entity.Reservation;
import com.GaYaHole.Pro.entity.Room;
import com.GaYaHole.Pro.entity.User;
import com.GaYaHole.Pro.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminServiceImpl implements AdminService {

    @Autowired
    RoomRepository roomRepository;

    @Autowired
    AccountRepository accountRepository;

    @Autowired
    NoticeRepository noticeRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    ReservationRepository reservationRepository;

    @Override
    public void modRoomPrice(Room room) throws Exception {
        roomRepository.roomUpdate(room.getR_num(), room.getR_price());
    }

    @Override
    public int totalProfit() throws Exception {
        int result = accountRepository.totalAccounting();
        return  result;
    }

    @Override
    public void addNotice(Notice notice) throws Exception {
        noticeRepository.save(notice);
    }

    @Override
    public List<User> userinfo() throws Exception {
        List<User> users = userRepository.findAll();

        return users;
    }

    @Override
    public List<Reservation> allreservation() throws Exception {
        List<Reservation> reservations = reservationRepository.findAll();
        return reservations;
    }

    @Override
    public void modUsergrade(User user) throws Exception {
        userRepository.moduser(user.getId(), user.getGrade());
    }
}
