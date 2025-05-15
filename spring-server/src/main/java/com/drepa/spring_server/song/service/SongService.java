package com.drepa.spring_server.song.service;

import com.drepa.spring_server.song.entity.Song;
import com.drepa.spring_server.song.repository.SongRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SongService {
    private final SongRepository songRepository;

    public SongService(SongRepository songRepository) {
        this.songRepository = songRepository;
    }

    public List<Song> findAll(){
        return songRepository.findAll();
    }
}
