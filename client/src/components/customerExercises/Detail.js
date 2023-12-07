import React from 'react';
import { Typography, Stack, Button, Box } from '@mui/material';

import BodyPartImage from '../../icons/body-part.png';
import TargetImage from '../../icons/target.png';
import EquipmentImage from '../../icons/equipment.png';
import NavBar from '../customerNavBar';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, justifyContent: 'center', alignItems: 'center' }}>
      <NavBar />
      <img
        src={gifUrl}
        alt={name}
        className="detail-image"
        style={{ borderRadius: '8px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', maxWidth: '100%', height: '80%', marginRight: { xs: '0', lg: '30px' } }}
      />
      <Stack sx={{ gap: { xs: '20px', lg: '30px' }, maxWidth: { lg: '400px' }, marginLeft: { lg: '40px' } }}>
        <Typography sx={{ fontSize: { lg: '35px', xs: '24px' } }} fontWeight={700} textTransform="capitalize">
          {name}
        </Typography>
        <Typography sx={{ fontSize: { lg: '16px', xs: '14px' }, color: '#4F4C4C', mb: '10px' }}>
          <span style={{ textTransform: 'capitalize' }}>{name}</span> is a great exercise to target your {target}. It helps improve mood and energy.
        </Typography>
        {extraDetail?.map((item, index) => (
          <Stack key={item.name} direction="row" gap="16px" alignItems="center">
            <Button
              sx={{
                background: '#FFF2DB',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                padding: '0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: '15px',
              }}
            >
              <img src={item.icon} alt={bodyPart} style={{ width: '20px', height: '20px' }} />
            </Button>
            <Typography textTransform="capitalize" sx={{ fontSize: { lg: '16px', xs: '14px' } }}>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default Detail;
