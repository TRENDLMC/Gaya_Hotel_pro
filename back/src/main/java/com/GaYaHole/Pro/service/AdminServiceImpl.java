package com.GaYaHole.Pro.service;

import com.GaYaHole.Pro.entity.*;
import com.GaYaHole.Pro.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

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

    @Autowired
    OptionRepository optionRepository;

    @Override
    public void modRoomPrice(Room room) throws Exception {
        roomRepository.roomUpdate(room.getR_num(), room.getR_price());
    }

    @Override
    public String totalProfit() throws Exception {
        String result = accountRepository.totalAccounting();
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
    public List<Map<String, Object>> allreservation() throws Exception {
        List<Reservation> reservations = reservationRepository.findAll();
        List<Map<String, Object>> allresvlist = new ArrayList<>();
        for (int i=0; i<reservations.size(); i++) {                             // 옵션 코드 파싱
            String code = reservations.get(i).getOption_code();
            char[] codech=code.toCharArray();
            Map<String,Object>  map = new HashMap<>();
            for (int j=0; j<reservations.get(i).getOption_code().length(); j++) {
                String str2 = String.valueOf(codech[j]);
                Optional<Option> option = optionRepository.findById(str2);
                if(option.isPresent()) {
                    Option option1 = option.get();
                    map.put("imt" + j, option1);
                }
            }
            map.put("res_num",reservations.get(i));
            allresvlist.add(map);
        }

        return allresvlist;
    }

    @Override
    public void modUsergrade(User user) throws Exception {
        userRepository.moduser(user.getId(), user.getGrade());
    }

    @Override
    public List<Room> allrooms() throws Exception {
        List<Room> rooms = roomRepository.findAll();
        return rooms;
    }
}
