import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Video, Mic, MicOff, VideoOff, Send, Phone } from 'lucide-react';
import { Card } from "@/components/ui/card";

interface Message {
  id: string;
  sender: string;
  content: string;
  timestamp: Date;
}

export const ChatWindow = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isVideoOn, setIsVideoOn] = useState(false);
  const [isAudioOn, setIsAudioOn] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Simulated messages for demonstration
  useEffect(() => {
    setMessages([
      {
        id: '1',
        sender: 'Client',
        content: 'Hi, I wanted to discuss the project requirements',
        timestamp: new Date(),
      },
      {
        id: '2',
        sender: 'Freelancer',
        content: "Sure, I'm here to help! What would you like to know?",
        timestamp: new Date(),
      },
    ]);
  }, []);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const message: Message = {
      id: Date.now().toString(),
      sender: 'You',
      content: newMessage,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, message]);
    setNewMessage('');
    console.log('Message sent:', message);
  };

  const toggleVideo = async () => {
    try {
      if (!isVideoOn) {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } else {
        const stream = videoRef.current?.srcObject as MediaStream;
        stream?.getTracks().forEach(track => track.stop());
        if (videoRef.current) {
          videoRef.current.srcObject = null;
        }
      }
      setIsVideoOn(!isVideoOn);
      console.log('Video toggled:', !isVideoOn);
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const toggleAudio = () => {
    setIsAudioOn(!isAudioOn);
    console.log('Audio toggled:', !isAudioOn);
  };

  return (
    <div className="flex h-[600px] gap-4">
      <Card className="flex-1 p-4">
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Project Discussion</h2>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={toggleVideo}
                className={isVideoOn ? 'bg-primary text-primary-foreground' : ''}
              >
                {isVideoOn ? <Video /> : <VideoOff />}
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={toggleAudio}
                className={isAudioOn ? 'bg-primary text-primary-foreground' : ''}
              >
                {isAudioOn ? <Mic /> : <MicOff />}
              </Button>
            </div>
          </div>

          <ScrollArea className="flex-1 pr-4">
            <div className="space-y-4" ref={scrollRef}>
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex flex-col ${
                    message.sender === 'You' ? 'items-end' : 'items-start'
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.sender === 'You'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted'
                    }`}
                  >
                    <p className="text-sm font-semibold">{message.sender}</p>
                    <p>{message.content}</p>
                    <p className="text-xs opacity-70">
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          <form onSubmit={handleSendMessage} className="flex gap-2 mt-4">
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1"
            />
            <Button type="submit">
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </Card>

      <Card className="w-[300px] p-4">
        <div className="h-full flex flex-col">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="w-full h-[200px] bg-muted rounded-lg object-cover mb-4"
          />
          <div className="flex-1">
            <h3 className="font-semibold mb-2">Call Controls</h3>
            <div className="flex gap-2">
              <Button variant="destructive" className="w-full">
                <Phone className="w-4 h-4 mr-2" />
                End Call
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};