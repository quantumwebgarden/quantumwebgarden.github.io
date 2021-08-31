package com.quantumwebgarden.editcapturedimage

import android.content.Context
import android.graphics.Canvas
import android.graphics.Color
import android.graphics.Paint
import android.graphics.Path
import android.util.AttributeSet
import android.view.MotionEvent
import android.view.View
import android.widget.Toast
import kotlin.math.pow
import kotlin.math.sqrt

class CanvasDraw @JvmOverloads constructor(
    context: Context, attrs: AttributeSet? = null, defStyleAttr: Int = 0
) : View(context, attrs, defStyleAttr) {
    private var paint: Paint?=null
    private var path : Path?=null
    private var rectX = 0F
    private var rectY = 0F
    private var rectLastX = 0F
    private var rectLastY = 0F
    private var radiusOfCircle = 0F

    init {
        paint = Paint()
        path = Path()
        paint!!.color = Color.RED
        paint!!.strokeWidth = 10f
        paint!!.style = Paint.Style.STROKE
        paint!!.isAntiAlias = true
    }

    override fun onDraw(canvas: Canvas?) {
        super.onDraw(canvas)
        canvas!!.drawPath(path!!,paint!!)
        if(touchFlag == 2 || touchFlag == 3){
            paint!!.strokeWidth = 10f
            canvas.drawRect(rectX, rectY, rectLastX, rectLastY, paint!!)
        }
        else if(touchFlag == 4 || touchFlag == 5){
            paint!!.strokeWidth = 10f
            canvas.drawCircle(rectX, rectY, radiusOfCircle, paint!!)
        }
        else if(touchFlag == 6){
            paint!!.strokeWidth = 2f
            paint!!.textSize = 50F
            canvas.drawText(textToWrite, rectX, rectY, paint!!)
        }
        else if(touchFlag == 9){
            canvas.restore()
        }
    }

    override fun onTouchEvent(event: MotionEvent?): Boolean {
        val xPos: Float = event!!.x
        val yPos: Float = event!!.y
        if(touchFlag == 1){
            when(event!!.action)
            {
                MotionEvent.ACTION_DOWN ->{
                    path!!.moveTo(xPos,yPos)
                }
                MotionEvent.ACTION_MOVE ->{
                    path!!.lineTo(xPos,yPos)
                }
                MotionEvent.ACTION_UP ->{
                    Toast.makeText(context,"Draw lines as required",Toast.LENGTH_SHORT).show()
                }
                MotionEvent.ACTION_CANCEL ->{
                    touchFlag = 0
                }
                else ->{

                }
            }
        }
        else if(touchFlag == 2){
            when(event.action)
            {
                MotionEvent.ACTION_DOWN ->{
                    rectLastX = xPos
                    rectLastY = yPos
                    rectX = xPos + 90F
                    rectY = yPos + 90F

                }
                MotionEvent.ACTION_MOVE ->{

                }
                MotionEvent.ACTION_UP ->{
                    Toast.makeText(context,"Set other corner of the rectangle",Toast.LENGTH_SHORT).show()
                    touchFlag =3
                }
                MotionEvent.ACTION_CANCEL ->{
                    touchFlag = 0
                }
                else ->{

                }
            }
        }
        else if(touchFlag == 3){
            when(event.action)
            {
                MotionEvent.ACTION_DOWN ->{

                }
                MotionEvent.ACTION_MOVE ->{
                    rectX = xPos
                    rectY = yPos
                }
                MotionEvent.ACTION_UP ->{

                }
                MotionEvent.ACTION_CANCEL ->{
                    touchFlag = 0
                }
                else ->{

                }
            }
        }
        else if(touchFlag == 4){
            when(event.action)
            {
                MotionEvent.ACTION_DOWN ->{
                    rectX = xPos
                    rectY = yPos
                    radiusOfCircle = 50F
                }
                MotionEvent.ACTION_MOVE ->{

                }
                MotionEvent.ACTION_UP ->{
                    Toast.makeText(context,"Set radius of the circle",Toast.LENGTH_SHORT).show()
                    touchFlag =5
                }
                MotionEvent.ACTION_CANCEL ->{
                    touchFlag = 0
                }
                else ->{

                }
            }
        }
        else if(touchFlag == 5){
            when(event.action)
            {
                MotionEvent.ACTION_DOWN ->{

                }
                MotionEvent.ACTION_MOVE ->{
                    radiusOfCircle = sqrt((xPos.toDouble() - rectX.toDouble()).pow(2.0)).toFloat() + sqrt((yPos.toDouble() - rectY.toDouble()).pow(2.0)).toFloat()
                }
                MotionEvent.ACTION_UP ->{

                }
                MotionEvent.ACTION_CANCEL ->{
                    touchFlag = 0
                }
                else ->{

                }
            }
        }
        else if(touchFlag == 6){
            when(event.action)
            {
                MotionEvent.ACTION_DOWN ->{

                }
                MotionEvent.ACTION_MOVE ->{

                }
                MotionEvent.ACTION_UP ->{
                    rectX = xPos
                    rectY = yPos
                }
                MotionEvent.ACTION_CANCEL ->{
                    touchFlag = 0
                }
                else ->{

                }
            }
        }

        invalidate()
        return true
    }

}