'use client';
import React, { useState } from 'react';
import Sidebar from '@/components/sidebar';
import ProfileMenu from '@/components/ProfileMenu';
import colors from '../styles/Colors';
import search from '../../../public/search.png';
import Image from 'next/image';
import assitant from '../../../public/assistance.png';
import logo from '../../../public/logo2.png';
import add from '../../../public/button.add.png';
import settings from '../../../public/Settings.png';
import bgchat from '../../../public/bgChat.png';
import send from '../../../public/SendChat.png';
import attachement from '../../../public/attchChat.png';
import img from '../../../public/imgChat.png';

import voiceCallIcon from '../../../public/VoiceCall.png';
import videoCallIcon from '../../../public/VideoCall.png';
import documentIcon from '../../../public/IconDoc.png';
import attachmentIcon from '../../../public/IconAttch.png';
import imageIcon from '../../../public/IconImg.png';
import arrow from '../../../public/arwChat.png';
import Edit from '../../../public/button.edit.png';
import call from '../../../public/phone.png';
import video from '../../../public/videoCam.png';
import ADD from '../../../public/button.add.member.png';
import more from '../../../public/button.more.png';
import muteIcon from '../../../public/mic-off.png';

import closeIcon from '../../../public/closee.png';


export default function Messages() {
  const [selectedConversation, setSelectedConversation] = useState<number | null>(null);
  const [open,setOpen]=useState(false);
  const conversations = [
    { id: 1, name: 'John Doe', message: 'Hey, how are you?', time: '10:30 AM' },
    { id: 2, name: 'Jane Smith', message: 'Let’s catch up soon!', time: '11:15 AM' },
    // Add more conversation data here
  ];

  const messages = [
    { sender: 'John Doe', text: 'Hey, how are you?', time: '10:30 AM' },
    { sender: 'Me', text: 'I am good, thanks for asking!', time: '10:32 AM' },
  ];

  return (
    <div className="min-h-screen flex">
      {/* New Left Section */}
    

      {/* Sidebar */}
      <div className="w-64">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div style={{ backgroundColor: colors.secondary }} className="flex-1 p-4">
        <header className="flex justify-between items-center p-4">
          <div className="flex items-center font-bold text-xl">Messages</div>
          <ProfileMenu />
        </header>

        <div className="flex justify-center items-start">
          <div className="w-full max-h-screen max-w-6xl">
            {/* Chat Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-[120vh]">
              <div className="flex h-full">
                {/* Conversations List */}
                <div className="w-1/3 border-r border-gray-200 p-4 overflow-y-auto h-full">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Chercher ..."
                      className="w-full shadow-md px-4 py-2 pr-10 border rounded-2xl mb-4 bg-gradient-to-r from-[#E42E45] to-[#EC9350] placeholder-white"
                    />
                    <Image
                      src={search}
                      alt="search"
                      className="absolute right-4 top-1/3 transform -translate-y-1/3 w-4 h-4"
                    />
                  </div>
                  <div className="mb-2 flex justify-between">
                    <p className="text-l text-gray-500">Active Chats</p>
                    <Image src={add} alt="add" className="w-4 h-4" />
                  </div>
                  <div className="space-y-2">
                    {conversations.map((conversation) => (
                      <div
                        key={conversation.id}
                        className="flex items-center px-2 cursor-pointer hover:bg-gray-100 border-b border-gray-200"
                        onClick={() => setSelectedConversation(conversation.id)}
                      >
                        <div className="flex-shrink-0">
                          <Image
                            src={assitant}
                            alt={conversation.name}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                        </div>
                        <div className="flex-grow ml-3">
                          <div>{conversation.name}</div>
                          <div className="text-sm text-gray-500">{conversation.message}</div>
                        </div>
                        <div className="text-xs text-gray-500">{conversation.time}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Chat Messages */}
                <div className={`${open ? 'w-2/1' : 'w-2/3'} p-4 h-full`}>
                {selectedConversation ? (
                    <div
                      className="rounded-lg shadow-lg h-full flex flex-col"
                      style={{
                        backgroundImage: `url(${bgchat.src})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                      }}
                    >
                      <div className="flex items-center justify-between bg-[#F7F7F7] p-2 rounded-t-lg">
                        <div className="flex items-center space-x-2">
                          <Image
                            src={assitant}
                            alt="Profile"
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div>
                            <div>
                              {conversations.find(
                                (convo) => convo.id === selectedConversation
                              )?.name}
                            </div>
                            <div className="text-sm text-green-500">Online</div>
                          </div>
                        </div>
                        <Image
                          src={settings}
                          alt="Settings"
                          className="w-6 h-6 cursor-pointer"
                        />
                      </div>
                      <div className="flex-1 p-4 overflow-y-auto space-y-4">
                        {messages.map((message, index) => (
                          <div
                            key={index}
                            className={`flex ${
                              message.sender === 'Me' ? 'justify-end' : 'justify-start'
                            } space-x-2`}
                          >
                            {message.sender !== 'Me' && (
                              <Image
                                src={assitant}
                                alt="My Profile"
                                className="w-8 h-8 rounded-full object-cover"
                              />
                            )}
                            <div>
                              <div
                                className={`max-w-xs p-3 rounded-lg ${
                                  message.sender === 'Me'
                                    ? 'text-white'
                                    : 'bg-white text-gray-600'
                                }`}
                                style={{
                                  backgroundColor:
                                    message.sender === 'Me' ? colors.primary : colors.white,
                                }}
                              >
                                <div>{message.text}</div>
                              </div>
                              <div
                                className={`text-xs mt-2 text-gray-500 ${
                                  message.sender === 'Me' ? 'text-right' : 'text-left'
                                }`}
                              >
                                {message.time}
                              </div>
                            </div>
                            {message.sender === 'Me' && (
                              <Image
                                src={assitant}
                                alt="Other User"
                                className="w-8 h-8 rounded-full object-cover"
                              />
                            )}
                          </div>
                        ))}
                      </div>
                      <div className={`bg-white mx-6 p-2 my-4 rounded-lg flex items-center justify-between `}>
                        <input
                          type="text"
                          placeholder="Tapez quelque chose "
                          className="flex-1 p-2 rounded-lg focus:outline-none"
                        />
                        <div className={`flex items-center ${open?'mr-12':'mr-0'}`}>
                        <Image src={img} alt="img" className="w-8 h-8 mr-2" />
                        <Image src={attachement} alt="att" className="w-8 h-8 mr-2" />
                        <Image src={send} alt="send" className="w-8 h-8" />
                        </div>
                       
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center min-h-screen text-center">
                      <Image src={logo} alt="LOGO" className="w-16 h-16 mb-4" />
                      <h3 className="text-xl text-gray-500 mb-2">Billrswift pour desktop</h3>
                      <p className="text-sm text-gray-500 max-w-sm mx-auto">
                        Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum. Lorem ipsum
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum..
                      </p>
                    </div>
                  )}
                </div>
                {/* menu */}
                 {!open &&
                  <div className="w-20 p-4 flex flex-col items-center space-y-4">
                <Image
          src={arrow} // Replace with actual profile photo
          alt="arrow"
          className="w-10 h-10  object-cover "
          onClick={() => setOpen(true)} // Wrap in a function
        />

        {/* Profile Photo */}
        <Image
          src={assitant} // Replace with actual profile photo
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover mb-4"
        />

        {/* Icons for Voice and Video Call */}
        <Image
          src={voiceCallIcon} // Replace with voice call icon path
          alt="Voice Call"
          className="w-10 h-10 cursor-pointer"
        />
        <Image
          src={videoCallIcon} // Replace with video call icon path
          alt="Video Call"
          className="w-10 h-10 cursor-pointer"
        />

        {/* Divider */}

        {/* People Section */}
        <div className="text-center">
          <p className="text-sm font-medium mb-2">People</p>
          <div className="space-y-2">
          <Image
          src={assitant} // Replace with actual profile photo
          alt="person 1"
          className="w-10 h-10 rounded-full object-cover mb-4"
        />
                   <Image
          src={assitant} // Replace with actual profile photo
          alt="person 2"
          className="w-10 h-10 rounded-full object-cover mb-4"
        />
                  <Image
          src={assitant} // Replace with actual profile photo
          alt="person3"
          className="w-10 h-10 rounded-full object-cover "
        />
          </div>
        </div>

        {/* Divider */}

        {/* Files Section */}
        <div className="text-center">
          <p className="text-sm font-medium mb-2">Files</p>
          <div className="space-y-2">
            <Image
              src={documentIcon} // Replace with document icon
              alt="Documents"
              className="w-10 h-10"
            />
            <Image
              src={attachmentIcon} // Replace with attachment icon
              alt="Attachments"
              className="w-10 h-10"
            />
            <Image
              src={imageIcon} // Replace with image icon
              alt="Images"
              className="w-10 h-10"
            />
          </div>
        </div>
      </div>}
      {/* {more detailed menu } */}
      {open && (
  <div className="w-30 p-4 flex flex-col space-y-6 bg-white shadow-md  max-w-md rounded-md">
    {/* Back Arrow and Header */}
    <div className="flex items-center space-x-4">
      <Image
        src={arrow}
        alt="arrow"
        className="w-6 h-6 cursor-pointer"
        onClick={() => setOpen(false)} // Wrap in a function
      />
      <p className="text-lg font-semibold text-gray-700">Chat details</p>
    </div>

    {/* Profile Section */}
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <Image
          src={assitant}
          alt="Profile"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <p className="text-sm font-medium text-gray-800">Leila Alaoui</p>
          <p className="text-xs text-gray-500">3 members</p>
          <p className="text-xs text-gray-500">Last message: Today, 09:56</p>
        </div>
      </div>
      <Image
        src={Edit}
        alt="edit"
        className="h-6 w-6 cursor-pointer"
      />
    </div>

    {/* Voice and Video Buttons */}
    <div className="flex space-x-4">
      {/* Voice Chat */}
      <div className="flex items-center justify-center bg-green-500 text-white px-4 py-2 rounded-md shadow-md space-x-2 cursor-pointer">
        <Image src={call} alt="call" className="h-5 w-5" />
        <span className="text-sm font-medium">Voice Chat</span>
      </div>
      {/* Video Call */}
      <div className="flex items-center justify-center bg-red-500 text-white px-4 py-2 rounded-md shadow-md space-x-2 cursor-pointer">
        <Image src={video} alt="video" className="h-5 w-5" />
        <span className="text-sm font-medium">Video Call</span>
      </div>
    </div>

    {/* People Section */}
    <div className="p-4 rounded-lg space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <p className="text-sm font-medium text-gray-700">People</p>
        <div className="flex space-x-2">
          <Image src={ADD} alt="ADD" className="h-6 w-6 cursor-pointer" />
          <Image src={more} alt="more" className="h-6 w-6 cursor-pointer" />
        </div>
      </div>
      {/* People List */}
      <div className="space-y-3">
        {[
          { name: 'Leila Alaoui', status: 'Online', statusColor: 'green-500' },
          { name: 'Said Mansouri', status: 'Away', statusColor: 'gray-500' },
          { name: 'Fadi Anarchi', status: 'Online', statusColor: 'green-500' },
        ].map((person, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm"
          >
            <div className="flex items-center space-x-3">
              <Image
                src={assitant}
                alt={person.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-medium text-gray-800">
                  {person.name}
                </p>
                <p className={`text-xs text-${person.statusColor}`}>
                  {person.status}
                </p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Image
                src={muteIcon}
                alt="Mute"
                className="h-4 w-4 cursor-pointer"
              />
              <Image
                src={closeIcon}
                alt="Remove"
                className="h-4 w-4 cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* File Section */}
    <div className="p-4  rounded-lg space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <p className="text-sm font-medium text-gray-700">Chat Files</p>
        <Image src={more} alt="more" className="h-6 w-6 cursor-pointer" />
      </div>
      {/* Files List */}
      {[
        {
          title: 'Documents',
          count: '8 files',
          size: '2.45 MB',
          icon: documentIcon,
        },
        {
          title: 'Images',
          count: '13 files',
          size: '9.55 MB',
          icon: imageIcon,
        },
        {
          title: 'Attachments',
          count: '7 files',
          size: '0.45 MB',
          icon: attachmentIcon,
        },
      ].map((file, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm"
        >
          <div className="flex items-center space-x-3">
            <Image
              src={file.icon}
              alt={file.title}
              className="h-8 w-8 object-cover"
            />
            <div>
              <p className="text-sm font-medium text-gray-800">{file.title}</p>
              <p className="text-xs text-gray-500">{file.count}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <p className="text-xs text-gray-600">{file.size}</p>
            <svg
              className="h-4 w-4 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      ))}
    </div>
  </div>
)}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
