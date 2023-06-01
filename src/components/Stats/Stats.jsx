import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const Marks = [
    {
        name: "Assignment 1",
        marks: "57",
    },
    {
        name: "Assignment 2",
        marks: "58",
    },
    {
        name: "Assignment 3",
        marks: "60",
    },
    {
        name: "Assignment 4",
        marks: "60",
    },
    {
        name: "Assignment 5",
        marks: "60",
    },
    {
        name: "Assignment 6",
        marks: "60",
    },
    {
        name: "Assignment 7",
        marks: "58",
    },
    {
        name: "Assignment 8",
        marks: "60",
    }
]

const getIntroOfPage = (label) => {
    if (label === 'Assignment 1') {
      return "New-Year-New-Me";
    }
    if (label === 'Assignment 2') {
      return "G3-Architects";
    }
    if (label === 'Assignment 3') {
      return "Legal Solutions";
    }
    if (label === 'Assignment 4') {
      return 'Problem Solving';
    }
    if (label === 'Assignment 5') {
      return 'Geometry_Genius';
    }
    if (label === 'Assignment 6') {
      return 'AI-Universe';
    }
    if (label === 'Assignment 7') {
      return 'Debugging';
    }
    if (label === 'Assignment 8') {
      return 'Knowledge Cafe';
    }
    return '';
  };
  
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${label} : ${payload[0].value}`}</p>
          <p className="intro">{getIntroOfPage(label)}</p>
          
        </div>
      );
    }
  
    return null;
  };

const Stats = () => {
    return (
        <div className='bg-purple-100 rounded-lg mt-7 p-3'>
            <div className='mt-20'>
                <h1 className='text-3xl md:text-6xl font-semibold font-sans'>
                    Assignment Marks
                </h1>
            </div>
            <div className='flex  mt-20 md:mt-40 justify-center pb-10'>
                <ResponsiveContainer width="100%" aspect={3}>
                    <AreaChart
                        width={500}
                        height={400}
                        data={Marks}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip content={<CustomTooltip />} />
                        <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Stats;