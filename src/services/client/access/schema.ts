import Joi from '@hapi/joi';
import { otpInfo } from '../../../config';
import { JoiAuthBearer } from '../../../helper/validator';

export default {
  emailOtp: Joi.object().keys({
    email: Joi.string().required().email(),
  }),
  checkEmailOtp: Joi.object().keys({
    email: Joi.string().required().email(),
    otp:Joi.string().required().length(otpInfo.otpLength)

  }),
  phoneOtp: Joi.object().keys({
    phone: Joi.string().required().length(10),
  }),
  checkPhoneOtp: Joi.object().keys({
    phone: Joi.string().required().length(10),
    otp:Joi.string().required().length(otpInfo.otpLength)

  }),
  refreshToken: Joi.object().keys({
    refreshToken: Joi.string().required().min(1),
  }),
  auth: Joi.object()
    .keys({
      authorization: JoiAuthBearer().required(),
    })
    .unknown(true),
  signup: Joi.object().keys({
    name: Joi.string().required().min(3),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6),
    profilePicUrl: Joi.string().optional().uri(),
  }),

  signupOwner: Joi.object().keys({
    firstName: Joi.string().required().min(3),
    lastName: Joi.string().required().min(3),
    email: Joi.string().required().email(),
    phone: Joi.string().required().length(10),
    password: Joi.string().required().min(6),
  }),
};
