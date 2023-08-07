package com.GaYaHole.Pro;

import com.GaYaHole.Pro.entity.Option;
import com.GaYaHole.Pro.entity.Reservation;
import com.GaYaHole.Pro.entity.Room;
import com.GaYaHole.Pro.entity.User;
import com.GaYaHole.Pro.repository.OptionRepository;
import com.GaYaHole.Pro.repository.ReservationRepository;
import com.GaYaHole.Pro.repository.RoomRepository;
import com.GaYaHole.Pro.repository.UserRepository;
import com.sun.jna.platform.unix.X11;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@SpringBootApplication
@EnableJpaAuditing
public class ProApplication implements CommandLineRunner {

	@Autowired
	private RoomRepository roomRepository;
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private OptionRepository optionRepository;
	@Autowired
	private ReservationRepository reservationRepository;

	@Override
	public void run(String... args) throws Exception {

		User user1 = new User("test","12345","경기도 안산시 이동","715-3","김테스트","010","1234","1234"
				,"test@test.com",1);

		User user2 = new User("test2","12345","경기도 안산시 이동","715-3","김테스트2","010","1234","5978"
				,"test2@test.com",0);

		Room room1 = new Room(101, 2, "디럭스 룸", 160000);

		Room room2 = new Room(102, 3, "스탠다드 룸", 180000);

		// 테스트 계정 생성
		userRepository.save(user1);
		userRepository.save(user2);

		//16 개의 방 생성
		roomRepository.save(room1);
		roomRepository.save(room2);
		roomRepository.save(new Room(103, 4, "패밀리 룸", 240000));
		roomRepository.save(new Room(104, 2, "스위트 룸", 300000));
		roomRepository.save(new Room(105, 2, "디럭스 룸", 160000));
		roomRepository.save(new Room(106, 3, "스탠다드 룸", 180000));
		roomRepository.save(new Room(107, 4, "패밀리 룸", 240000));
		roomRepository.save(new Room(108, 2, "스위트 룸", 300000));
		roomRepository.save(new Room(109, 2, "디럭스 룸", 160000));
		roomRepository.save(new Room(110, 3, "스탠다드 룸", 180000));
		roomRepository.save(new Room(111, 4, "패밀리 룸", 240000));
		roomRepository.save(new Room(112, 2, "스위트 룸", 300000));
		roomRepository.save(new Room(113, 2, "디럭스 룸", 160000));
		roomRepository.save(new Room(114, 3, "스탠다드 룸", 180000));
		roomRepository.save(new Room(115, 4, "패밀리 룸", 240000));
		roomRepository.save(new Room(116, 2, "스위트 룸", 300000));

		optionRepository.save(new Option("A", "수영장", 20000, 0)); // 인당
		optionRepository.save(new Option("B", "바베큐", 40000, 0));
		optionRepository.save(new Option("C", "조식", 30000, 0)); // 인당
		optionRepository.save(new Option("D", "사우나", 20000, 1)); // 인당
		optionRepository.save(new Option("E", "엑스트라 배드", 40000, 1)); //인당
		optionRepository.save(new Option("F", "VR", 100000, 2));
		optionRepository.save(new Option("G", "키즈카페", 40000, 2));
		optionRepository.save(new Option("H", "기념일행사", 300000, 3));
//
//		List<Room> testroom = roomRepository.test();
//
//		System.out.println("============"+testroom.get(0).getR_num()+"============");
//		String string= "2023-08-17";
//		Date testdate=sidf.parse(string);
//		List<Room> ableRoom = roomRepository.test2(testdate);
//
//		if (ableRoom.size()!=0) {
//			System.out.println("========테스트 결과 출력 :" + ableRoom.get(2).getR_price()+ "   아악 =========");
//		}
//		else{
//			System.out.println("ableRoom이 비어있음");
//		}

//		SimpleDateFormat sidf=new SimpleDateFormat("yyyy-MM-dd");
//
//		String string1 ="2023-08-18";
//		String string2 ="2023-08-30";
//		Date testdate1= sidf.parse(string1);
//		Date testdate2= sidf.parse(string2);
//		List<Room> ableRoomList = roomRepository.dateCal(testdate1, testdate2);
//
//		if(ableRoomList.size()!=0){
//			System.out.println("===========예약 가능한 방 목록============");
//
//			for(int i=0; i<ableRoomList.size()-1; i++){
//				System.out.println("============== "+(i+1)+"번째 방 ==============");
//
//				int roomnum = ableRoomList.get(i).getR_num();
//				int roomprice = ableRoomList.get(i).getR_price();
//				int roomsize = ableRoomList.get(i).getR_size();
//				String roomtype = ableRoomList.get(i).getR_type();
//
//				System.out.println("방 번호 : "+roomnum);
//				System.out.println("방 가격 : "+roomprice);
//				System.out.println("방 인원 : "+roomsize);
//				System.out.println("방 종류 : "+roomtype);
//
//				System.out.println("========================================");
//
//			}
//		}
	}

	public static void main(String[] args) {
		SpringApplication.run(ProApplication.class, args);
	}

}
