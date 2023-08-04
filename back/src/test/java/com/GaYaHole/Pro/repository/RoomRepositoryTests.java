package com.GaYaHole.Pro.repository;


import com.GaYaHole.Pro.entity.Room;
import com.GaYaHole.Pro.entity.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Commit;

import java.util.stream.IntStream;

@SpringBootTest
public class RoomRepositoryTests {

    @Autowired
    private RoomRepository roomRepository;

//    @Test
//    @Commit
//    public void insertTest(){
//        IntStream.rangeClosed(1,5).forEach(i->{
//
//            Room room = Room.builder()
//                    .r_num(i)
//                    .r_size(i+3/2)
//                    .r_type("room type..."+i)
//                    .r_price(i*100000)
//                    .build();
//
//            System.out.println(roomRepository.save(room));
//
//        });
//    }
}
