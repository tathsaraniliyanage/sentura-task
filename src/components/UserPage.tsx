import React, { useEffect, useState } from 'react';
import axios from 'axios';


interface User {
  uid: string;
  name: string;
  nickname: string;
  email: string;
  directory: string;
}
type UserResponse = {
  id: number;
  name?: string;
  uid?: string;
  nickname?: string;
  email?: string;
  directory?: string;
  created_at?: string;
  is_bot?: boolean;
  given_name?: string;
  middle_name?: string;
  phone_number: string;
  comment?: string;
  picture?: string;
}
type userRespons={
    
    data: UserResponse[]
}

const UserPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState<User>({
    uid: '',
    name: '',
    nickname: '',
    email: '',
    directory: ''
  });

  const apiUrl = "https://8015b5dbc0724d38882ac90397c27649.weavy.io/api/users"
  const apiKey = "wys_hMWpXdekxcn9Gc8Ioah3azOllzUZ7l3HN9yB";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(apiUrl, formData, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        }
      });
      setUsers(prev => [...prev, res.data]);
      setShowForm(false);
      setFormData({ uid: '', name: '', nickname: '', email: '', directory: '' });
    } catch (error: any) {
      console.error('Error creating user:', error.response?.data || error.message);
    }
  };
  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
          }
        });
        
        
        const usersData: userRespons= res.data;
        const temUser:User[]=[]


        usersData.data.map((u)=>{
          temUser.push({
            email: u.email ?? '',
            name: u.name ?? '',
            directory: u.directory ?? '',
            nickname: u.nickname ?? '',
            uid: u.uid ?? ''
          })
        })
        setUsers(temUser)
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }
    fetchUser();
  }, []);
  

  return (
    <div className="min-h-screen p-6 bg-gray-100 text-gray-800">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">User Management</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {showForm ? 'Close Form' : 'Create User'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-6 mb-6 space-y-4">
          {(['uid', 'name', 'nickname', 'email', 'directory'] as (keyof User)[]).map((field) => (
            <div key={field}>
              <label className="block text-sm font-medium text-gray-700 capitalize">{field}</label>
              <input
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
          ))}
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Submit
          </button>
        </form>
      )}


      <div className="overflow-x-auto bg-white rounded shadow-md">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left">UID</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Nickname</th>
              <th className="px-4 py-2 text-left">Email</th>
             
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center py-4">No users created yet.</td>
              </tr>
            ) : (
            
              users.map((user) => (
                <tr key={user.uid} className="border-t">
                  <td className="px-4 py-2">{user.uid}</td>
                  <td className="px-4 py-2">{user.name}</td>
                  <td className="px-4 py-2">{user.nickname}</td>
                  <td className="px-4 py-2">{user.email}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserPage;
