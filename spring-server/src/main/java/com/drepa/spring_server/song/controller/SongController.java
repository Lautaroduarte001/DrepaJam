package com.drepa.spring_server.song.controller;

import com.drepa.spring_server.song.entity.Song;
import com.drepa.spring_server.song.service.SongService;
import com.drepa.spring_server.user.entity.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/songs")
public class SongController {
    private final SongService songService;

    public SongController(SongService songService) {
        this.songService = songService;
    }

    @GetMapping
    public List<Song> getSongs() {
        return songService.findAll();
    }

}
