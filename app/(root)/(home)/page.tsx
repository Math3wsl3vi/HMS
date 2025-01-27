"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { userData } from './../../../lib/data'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface User {
  id: number;
  name: string;
  unit: string;
  rank: string;
  phone: string;
} 

const Home = () => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen ] =useState(false)
  const [filteredResults, setFilteredResults] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const router = useRouter();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setQuery(value);

      // Filter user data based on the query
      if (value.trim() === '') {
          setFilteredResults([]);
      } else {
          const results = userData.filter(
              (user) =>
                  user.name.toLowerCase().includes(value.toLowerCase()) ||
                  user.id.toString().includes(value)
          );
          setFilteredResults(results);
      }
  };

  const handleSelect = (user: User) => {
    setQuery(user.name); 
    setSelectedUser(user); 
    setFilteredResults([]); 
  };
  const handleContinue = () => {
    if (selectedUser) {
      router.push(`/triage?id=${selectedUser.id}`);
    } else {
      alert('Please select a user before continuing.');
    }
  };

  return (
    <div className="h-screen w-full font-poppins flex justify-center p-2">
      <div className="w-full md:w-1/2">
        <h1 className="text-3xl text-center">
          Welcome to Lanet Regional Hospital
        </h1>
        <p className="text-center text-gray-400 mt-3">
          Enter the patients Service Number/Name
        </p>
        <div className="mt-10 flex justify-center items-center gap-10 flex-col">
          <Input
            placeholder="Enter Service Number"
            value={query}
            onChange={handleSearch}
            className="font-poppins text-3xl focus-visible:ring-0 focus-visible:ring-offset-0 p-2"
          />
          {filteredResults.length> 0 && (
            <div className="w-full md:w-3/4 bg-white border rounded-md">
              {filteredResults.map((user)=>(
                <div
                 key={user.id}
                onClick={()=>handleSelect(user)}
                className="p-2 cursor-pointer flex flex-row gap-2 items-center justify-between">
                  <p>{user.name}</p>
                  <p>{user.id}</p>
                </div>
              ))}
            </div>
          )}
          <Button
            onClick={handleContinue}
            className="w-1/2 bg-green-1"
          >
            Continue
          </Button>
        </div>
        <div>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Home;
