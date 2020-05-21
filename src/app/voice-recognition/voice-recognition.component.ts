import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare const annyang: any;

@Component({
  selector: 'app-voice-recognition',
  templateUrl: './voice-recognition.component.html',
  styleUrls: ['./voice-recognition.component.css']
})

export class VoiceRecognitionComponent implements OnInit {
  voiceActiveSectionDisabled: boolean = true;
  voiceActiveSectionError: boolean = false;
  voiceActiveSectionSuccess: boolean = false;
  voiceActiveSectionListening: boolean = false;
  voiceText: any;
  record: boolean = false;

  constructor(private ngZone: NgZone, private router: Router){}

  ngOnInit(): void {
    
  }
  initializeVoiceRecognitionCallback(): void {
     annyang.addCallback('error', (err) => {
       if(err.error === 'network'){
         this.voiceText = "Internet is require";
         annyang.abort();
         this.ngZone.run(() => this.voiceActiveSectionSuccess = true);
       } else if (this.voiceText === undefined) {
         this.ngZone.run(() => this.voiceActiveSectionError = true);
         annyang.abort();
       }
     });

    annyang.addCallback('soundstart', (res) => {
     this.ngZone.run(() => this.voiceActiveSectionListening = true);
    });
    annyang.addCallback('end', () => {
      if (this.voiceText === undefined) {
        this.ngZone.run(() => this.voiceActiveSectionError = true);
        annyang.abort();
      }
      this.router.navigate(['/search/all'], {queryParams: { 'query':  this.voiceText} });
    });
    annyang.addCallback('result', (userSaid) => {
      this.ngZone.run(() => this.voiceActiveSectionError = false);
      let queryText: any = userSaid[0];
      annyang.abort();
      this.voiceText = queryText;
      console.log(this.voiceText)
      this.ngZone.run(() => this.voiceActiveSectionListening = false);
      this.ngZone.run(() => this.voiceActiveSectionSuccess = true);
    });
  }

  startVoiceRecognition(): void {
    this.voiceActiveSectionDisabled = false;
    this.voiceActiveSectionError = false;
    this.voiceActiveSectionSuccess = false;
    this.voiceText = undefined;
    if (annyang) {
      let commands = {
        'demo-annyang': () => { }
      };
      annyang.addCommands(commands);
     
      this.initializeVoiceRecognitionCallback();
      annyang.start({ autoRestart: false });
    }
  }
  toggleVoiceRecognition():void{
    if(!this.record)
      this.startVoiceRecognition();
    else
      this.closeVoiceRecognition();

    this.record = !this.record;
  }
  closeVoiceRecognition(): void {
    this.voiceActiveSectionDisabled = true;
    this.voiceActiveSectionError = false;
    this.voiceActiveSectionSuccess = false;
    this.voiceActiveSectionListening = false;
    this.voiceText = undefined;
    if(annyang){
     annyang.abort();
    }
  }
}

