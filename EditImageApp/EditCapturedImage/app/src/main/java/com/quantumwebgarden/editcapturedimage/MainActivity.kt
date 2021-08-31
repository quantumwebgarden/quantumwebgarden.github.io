package com.quantumwebgarden.editcapturedimage

import android.annotation.TargetApi
import android.app.Activity
import android.app.AlertDialog
import android.content.ContentUris
import android.content.Intent
import android.content.pm.PackageManager
import android.graphics.*
import android.net.Uri
import android.os.Build
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.provider.DocumentsContract
import android.provider.MediaStore
import android.widget.Toast
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import androidx.core.content.FileProvider
import com.quantumwebgarden.editcapturedimage.databinding.ActivityMainBinding
import android.graphics.BitmapFactory
import android.graphics.drawable.BitmapDrawable
import androidx.annotation.RequiresApi
import android.content.DialogInterface

import android.text.InputType
import android.view.View

import android.widget.EditText

import android.graphics.Bitmap
import android.os.Environment
import android.os.Handler
import java.io.*
import java.util.*

import com.google.firebase.storage.StorageReference
import com.google.firebase.storage.StorageTask
import android.widget.ProgressBar
import androidx.core.net.toUri
import com.google.firebase.database.DatabaseReference


var textToWrite:String = ""
var touchFlag = 0
class MainActivity : AppCompatActivity() {
    private lateinit var binding: ActivityMainBinding
    private var mUri: Uri? = null
    private val CAPTURE_PHOTO = 1
    private val CHOOSE_PHOTO = 2
    private var bitmapFinal: Bitmap? = null

    override fun onStart() {
        super.onStart()
        val checkWritePermission = ContextCompat.checkSelfPermission(this, android.Manifest.permission.WRITE_EXTERNAL_STORAGE)
        if (checkWritePermission != PackageManager.PERMISSION_GRANTED){
            ActivityCompat.requestPermissions(this, arrayOf(android.Manifest.permission.WRITE_EXTERNAL_STORAGE), 12)
        }
    }


    private fun show(message: String) {
        Toast.makeText(this,message, Toast.LENGTH_SHORT).show()
    }

    private fun capturePhoto(){
        val capturedImage = File(externalCacheDir, "My_Captured_Photo.jpg")
        if(capturedImage.exists()) {
            capturedImage.delete()
        }
        capturedImage.createNewFile()
        mUri = if(Build.VERSION.SDK_INT >= 24){
            FileProvider.getUriForFile(this, "com.quantumwebgarden.editcapturedimage.provider",
                capturedImage)
        } else {
            Uri.fromFile(capturedImage)
        }

        val intent = Intent("android.media.action.IMAGE_CAPTURE")
        intent.putExtra(MediaStore.EXTRA_OUTPUT, mUri)
        startActivityForResult(intent, CAPTURE_PHOTO)
    }
    private fun openGallery(){
        val intent = Intent("android.intent.action.GET_CONTENT")
        intent.type = "image/*"
        startActivityForResult(intent, CHOOSE_PHOTO)
    }
    private fun renderImage(imagePath: String?){
        if (imagePath != null) {
            val bitmap = BitmapFactory.decodeFile(imagePath)
            val bitmapDrawable = BitmapDrawable(resources, bitmap)
            //binding.myPicture.setImaggeBitmap(bitmap)
            binding.myPicture.background = bitmapDrawable
            bitmapFinal = bitmap
        }
        else {
            show("ImagePath is null")
        }
    }
    private fun getImagePath(uri: Uri?, selection: String?): String {
        var path: String? = null
        val cursor = uri?.let { contentResolver.query(it, null, selection, null, null ) }
        if (cursor != null){
            if (cursor.moveToFirst()) {
                path = cursor.getString(cursor.getColumnIndex(MediaStore.Images.Media.DATA))
            }
            cursor.close()
        }
        return path!!
    }
    @TargetApi(19)
    private fun handleImageOnKitkat(data: Intent?) {
        var imagePath: String? = null
        val uri = data!!.data
        if (DocumentsContract.isDocumentUri(this, uri)){
            val docId = DocumentsContract.getDocumentId(uri)
            if (uri != null) {
                if ("com.android.providers.media.documents" == uri.authority){
                    val id = docId.split(":")[1]
                    val selsetion = MediaStore.Images.Media._ID + "=" + id
                    imagePath = getImagePath(
                        MediaStore.Images.Media.EXTERNAL_CONTENT_URI,
                        selsetion)
                } else if ("com.android.providers.downloads.documents" == uri.authority){
                    val contentUri = ContentUris.withAppendedId(Uri.parse(
                        "content://downloads/public_downloads"), java.lang.Long.valueOf(docId))
                    imagePath = getImagePath(contentUri, null)
                }
            }
        }
        else if (uri != null) {
            if ("content".equals(uri.scheme, ignoreCase = true)){
                imagePath = getImagePath(uri, null)
            }
            else {
                if ("file".equals(uri.scheme, ignoreCase = true)){
                    imagePath = uri.path
                }
            }
        }
        renderImage(imagePath)
    }

    override fun onRequestPermissionsResult(requestCode: Int, permissions: Array<out String>
                                            , grantedResults: IntArray) {
        super.onRequestPermissionsResult(requestCode, permissions, grantedResults)
        when(requestCode){
            11 ->
                if (grantedResults.isNotEmpty() && grantedResults[0] ==
                    PackageManager.PERMISSION_GRANTED){
                    openGallery()
                }else {
                    show("Unfortunately You Denied Permission to Perform this Operation.")
                }
            12 ->
                if (grantedResults.isNotEmpty() && grantedResults[0] ==
                    PackageManager.PERMISSION_GRANTED){
                    openGallery()
                }else {
                    show("Unfortunately You Denied Permission to Perform this Operation.")
                }
            13 ->
                if (grantedResults.isNotEmpty() && grantedResults[0] ==
                    PackageManager.PERMISSION_GRANTED){
                    capturePhoto()
                }else {
                    show("Unfortunately You Denied Permission to Perform this Operation.")
                }
        }
    }

    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)
        when(requestCode){
            CAPTURE_PHOTO ->
                if (resultCode == Activity.RESULT_OK) {
                    val bitmap = BitmapFactory.decodeStream(
                        mUri?.let { contentResolver.openInputStream(it) })
                    val bitmapDrawable = BitmapDrawable(resources, bitmap)
                    //binding.myPicture.setImageBitmap(bitmap)
                    binding.myPicture.background = bitmapDrawable
                    bitmapFinal = bitmap
                }
            CHOOSE_PHOTO ->
                if (resultCode == Activity.RESULT_OK) {
                    handleImageOnKitkat(data)
                }
        }
    }

    @RequiresApi(Build.VERSION_CODES.M)
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)
        binding.floatingCameraButton.setOnClickListener {
            val checkCameraPermission = ContextCompat.checkSelfPermission(this, android.Manifest.permission.CAMERA)
            if (checkCameraPermission != PackageManager.PERMISSION_GRANTED){
                ActivityCompat.requestPermissions(this, arrayOf(android.Manifest.permission.CAMERA), 13)
            }
            else{
                capturePhoto()
            }
        }
        binding.floatingGalleryButton.setOnClickListener {
            val checkReadPermission = ContextCompat.checkSelfPermission(this, android.Manifest.permission.READ_EXTERNAL_STORAGE)
            if (checkReadPermission != PackageManager.PERMISSION_GRANTED){
                ActivityCompat.requestPermissions(this, arrayOf(android.Manifest.permission.READ_EXTERNAL_STORAGE), 11)
            }
            else{
                openGallery()
            }
        }

        binding.saveButton.setOnClickListener {
            val width = binding.canvasLayout.width
            val height = binding.canvasLayout.height
            val bitmap = Bitmap.createBitmap(width, height, Bitmap.Config.ARGB_8888)
            val canvas = Canvas(bitmap)
            val bgDrawable = binding.canvasLayout.background
            if (bgDrawable != null) {
                bgDrawable.draw(canvas)
            } else {
                canvas.drawColor(Color.WHITE)
            }
            binding.canvasLayout.draw(canvas)
            val path = Environment.getExternalStorageDirectory().absolutePath + System.currentTimeMillis().toString() + "/NewSampleImage.png"
            val stream = FileOutputStream(path)
            bitmap.compress(Bitmap.CompressFormat.PNG, 100, stream)
            bitmap.recycle()
            stream.close()
            uploadFile(path)


        }
        binding.editButton.setOnClickListener {
            binding.saveOrEdit.visibility = View.GONE
            binding.confirmButton.visibility = View.VISIBLE

        }
        binding.confirmButton.setOnClickListener {
            binding.saveOrEdit.visibility = View.VISIBLE
            binding.confirmButton.visibility = View.GONE
        //touchFlag = 9
        }
        binding.rectDraw.setOnClickListener {
            touchFlag = if(touchFlag == 2){
                0
            } else{
                2
            }
        }
        binding.circleDraw.setOnClickListener {
            touchFlag = if(touchFlag == 4){
                0
            } else{
                4
            }
        }
        binding.textDraw.setOnClickListener {

            val builder: AlertDialog.Builder = AlertDialog.Builder(this)
            builder.setTitle("Enter Text to add on photo")
            val input = EditText(this)
            input.inputType = InputType.TYPE_CLASS_TEXT
            builder.setView(input)
            builder.setPositiveButton("Set text",
                DialogInterface.OnClickListener { dialog, which ->
                    textToWrite = input.text.toString()
                    touchFlag = if(touchFlag == 6){
                        0
                    } else{
                        6
                    }
                })
            builder.setNegativeButton("Cancel",
                DialogInterface.OnClickListener { dialog, which -> dialog.cancel()
                    touchFlag = 0
                })

            builder.show()
        }
        binding.penDraw.setOnClickListener {
            touchFlag = if(touchFlag == 1){
                0
            } else{
                1
            }
        }
    }
    private var mImageUri: Uri? = null
    private val mStorageRef: StorageReference? = null
    private val mDatabaseRef: DatabaseReference? = null
    private var mUploadTask: StorageTask<*>? = null
    private val mProgressBar: ProgressBar? = null

    private fun uploadFile(pathOfFile: String) {
        mImageUri = pathOfFile.toUri()
        if (mImageUri != null) {
            val fileReference: StorageReference? = mStorageRef?.child(
                System.currentTimeMillis()
                    .toString() + ".png"
            )
            if (fileReference != null) {
                mUploadTask = fileReference.putFile(mImageUri!!)
                    .addOnSuccessListener { taskSnapshot ->
                        val handler = Handler()
                        handler.postDelayed({
                            mProgressBar?.progress = 0
                        }, 500)
                        Toast.makeText(this@MainActivity, "Upload successful", Toast.LENGTH_LONG).show()
                        val upload = Upload(
                            System.currentTimeMillis().toString() + "ImageEditorApp",
                            taskSnapshot.metadata?.reference?.downloadUrl.toString()
                        )
                        val uploadId: String? = mDatabaseRef?.push()?.key
                        if (uploadId != null) {
                            mDatabaseRef?.child(uploadId)?.setValue(upload)
                        }
                    }
                    .addOnFailureListener { e ->
                        Toast.makeText(
                            this@MainActivity,
                            e.message,
                            Toast.LENGTH_SHORT
                        ).show()
                    }
                    .addOnProgressListener { taskSnapshot ->
                        val progress =
                            100.0 * taskSnapshot.bytesTransferred / taskSnapshot.totalByteCount
                        mProgressBar?.progress = progress.toInt()
                    }
            }
        } else {
            Toast.makeText(this, "No file selected", Toast.LENGTH_SHORT).show()
        }
    }


}